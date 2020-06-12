import React from 'react';
import ActivityCard from '../../../components/Activities/ActivityCard';
import './common.css';

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      page: 'activities'
    };
  }

  componentDidMount() {
    let activities = [];
    fetch('https://medium-article-fetcher.herokuapp.com/posts', {
      crossDomain: true,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        for (let i = 0; i < 3; i++) {
          let obj = {};
          obj.title = resData.items[i].title;
          obj.link = resData.items[i].link;
          let m,
            urls = [],
            str = resData.items[i].content_encoded,
            rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

          while ((m = rex.exec(str))) {
            urls.push(m[1]);
          }
          obj.img = urls[0];

          let reg = /<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/;
          let stream = resData.items[i].content_encoded.match(reg);

          obj.description =
            stream[1]
              .split(' ')
              .slice(0, 20)
              .join(' ') + '...';

          activities.push(obj);
        }
        this.setState({ activities: activities });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div id='activity'>
        <h1 className='component-heading'>Blogs</h1>
        <div className='container d-flex justify-content-center actcards'>
          <div className='row'>
            {this.state.activities.map((currentActivity, index) => {
              return (
                <div className='col-md-4'>
                  <ActivityCard
                    key={index}
                    activity={currentActivity}
                    page={this.state.page}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <a
          href='/bloglist'
          className='btn btn-outline-primary activity'
          style={{ marginTop: '40px' }}
        >
          Continue to the Blogs Page
        </a>
      </div>
    );
  }
}

export default Activities;
