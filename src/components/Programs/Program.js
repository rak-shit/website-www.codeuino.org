import React, { Component } from 'react'
import './program.css'
import gsoc_logo from './images/gsoc.png'
import gci_logo from './images/gci.png'
import linux_logo from './images/linux.jpg'

export class Program extends Component {
    render() {
        return (
            <section class="container" id="programs">
                <div className="content-heading">
                    <h1>
                        Programs
                    </h1>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                        <div class="custom-column">
                            <div class="custom-column-content">
                                <img src={gsoc_logo} />
                                <div>
                                    <h4><b>Google Summer of Code - 2020</b></h4>
                                </div>
                            </div>
                            <div class="custom-column-footer"></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="custom-column">
                            <div class="custom-column-content">
                                <img src={gci_logo} style={{ "height": "110px", "width": "110px"}}
                                />
                                <div>
                                    <h4><b>Google Code In</b></h4>
                                </div>
                            </div>
                            <div class="custom-column-footer"></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="custom-column">
                                <div class="custom-column-content">
                                    <img src={linux_logo} style={{"height": "86px", "width": "200px"}} />
                                    <div>
                                        <h4><b>Linux Foundation Mentorship Program</b></h4>
                                    </div>
                                </div>
                                <div class="custom-column-footer"></div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default Program
