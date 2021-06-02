import * as React from "react";
import * as eventStyles from "../techEvents/techEvents.module.css"

const nonTechEvents = () => {
    return (
        <div>
            <p className={eventStyles.heading}>
                <h2 className={eventStyles.header}>Non-Technical</h2>
                <h3 className={eventStyles.subHeader}>Events</h3>
            </p>
            <div className={eventStyles.gridContainer}>
                <div className={eventStyles.gridItem1}>
                    <div className={eventStyles.card}>
                        <a href={"https://www.google.com"} target={'_blank'} className={eventStyles.btn}>
                            <span className={eventStyles.btnText}>Register Now</span>
                        </a>
                    </div>
                </div>

                <div className={eventStyles.gridItem2}>
                    <div className={eventStyles.card}>
                        <a href={"https://www.google.com"} target={'_blank'} className={eventStyles.btn}>
                            <span className={eventStyles.btnText}>Register Now</span>
                        </a>
                    </div>
                </div>

                <div className={eventStyles.gridItem3}>
                    <div className={eventStyles.card}>
                        <a href={"https://www.google.com"} target={'_blank'} className={eventStyles.btn}>
                            <span className={eventStyles.btnText}>Register Now</span>
                        </a>
                    </div>
                </div>

                <div className={eventStyles.gridItem4}>
                    <div className={eventStyles.card}>
                        <a href={"https://www.google.com"} target={'_blank'} className={eventStyles.btn}>
                            <span className={eventStyles.btnText}>Register Now</span>
                        </a>
                    </div>
                </div>

                <div className={eventStyles.gridItem5}>
                    <div className={eventStyles.card}>
                        <a href={"https://www.google.com"} target={'_blank'} className={eventStyles.btn}>
                            <span className={eventStyles.btnText}>Register Now</span>
                        </a>
                    </div>
                </div>

                <div className={eventStyles.gridItem6}>
                    <div className={eventStyles.card}>
                        <a href={"https://www.google.com"} target={'_blank'} className={eventStyles.btn}>
                            <span className={eventStyles.btnText}>Register Now</span>
                        </a>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default nonTechEvents;