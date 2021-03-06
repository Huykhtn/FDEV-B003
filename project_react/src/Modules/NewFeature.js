import React, { Component } from 'react';

class NewFeature extends Component {
    render() {
        return (
            <div class="x-box">
                <div class="container">
                    <div class="x-box_sec">
                        <div class="col-md-7 x-box-left">
                            <h2>XBOX 360</h2>
                            <h3>Suspendisse ornare nisl et tellus convallis, non vehicula nibh convallis.</h3>
                            <p>Proin ornare metus eros, quis mattis lorem venenatis eget. Curabitur eget dui
                                euismod, varius nisl eu, pharetra lacus. Sed vehicula tempor leo. Aenean dictum suscipit magna vel tempus.
                                Aliquam nec dui dolor. Quisque scelerisque aliquet est et dignissim.</p>
                            <a class="hvr-bounce-to-top" href="reviews.html">Read More</a>
                        </div>
                        <div class="col-md-5 x-box-right">
                            <img src="images/xbox.jpg" class="img-responsive" alt="" />
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewFeature;