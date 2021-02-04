import React, { useState } from 'react';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const FunFact = () => {
    const [counter, setCounter] = useState({
        startCounter: false,
    });

    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setCounter({ startCounter: true });
        }
    };
    return (
        <section className="funfact-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="funfact-one__single">
                            <h3 className="counter">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{ top: 10 }}
                                    delayedCall
                                >
                                    <CountUp
                                        end={counter.startCounter ? 245 : 0}
                                    />
                                </VisibilitySensor>
                            </h3>
                            <p>Categories</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="funfact-one__single">
                            <h3 className="counter">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{ top: 10 }}
                                    delayedCall
                                >
                                    <CountUp
                                        end={counter.startCounter ? 105 : 0}
                                        formattingFn={(n) =>
                                            `${n.toLocaleString()  }M+`
                                        }
                                    />
                                </VisibilitySensor>
                            </h3>
                            <p>Restaurants</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="funfact-one__single">
                            <h3 className="counter">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{ top: 10 }}
                                    delayedCall
                                >
                                    <CountUp
                                        end={counter.startCounter ? 190 : 0}
                                    />
                                </VisibilitySensor>
                            </h3>
                            <p>Countries</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="funfact-one__single">
                            <h3 className="counter">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{ top: 10 }}
                                    delayedCall
                                >
                                    <CountUp
                                        end={counter.startCounter ? 40 : 0}
                                    />
                                </VisibilitySensor>
                            </h3>
                            <p>Territories</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFact;
