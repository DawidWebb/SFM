import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../../data/actions";
import { AddEvent } from "../../../components";
import styles from "./eventItem.module.scss";

const EventItem = ({ eventData }) => {
  const dispatch = useDispatch();
  const {
    isImportant,
    isDone,
    _id,
    eventStart,
    eventEnd,
    eventContent,
    eventName,
    hrsStart,
    hrsEnd,
  } = eventData;

  const [isVievOpen, setIsVievOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowEventDetails = () => {
    setIsVievOpen(!isVievOpen);
  };
  const handleEditEvent = () => {
    setIsModalOpen(true);
  };
  const handleDeleteEvent = () => {
    dispatch(deleteEvent(_id));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.simpleViev}>
        <p>
          start: {eventStart} {hrsStart}
        </p>
        <div className={styles.eventTitle} onClick={handleShowEventDetails}>
          {eventName}
        </div>
        <p>{!isImportant || !isImportant.length ? "" : "ważne"}</p>
        <p>{!isDone || !isDone.length ? "" : "wykonane"}</p>
      </div>
      {!isVievOpen ? (
        ""
      ) : (
        <div className={styles.detailsViev}>
          <p>
            koniec: {eventEnd} {hrsEnd}
          </p>
          <p>{eventContent}</p>
          <div className={styles.functionButtons}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="none"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M10.94,18L7.4,14.46l1.41-1.41 l2.12,2.12l4.24-4.24l1.41,1.41L10.94,18z M13,9V3.5L18.5,9H13z" />
                </g>
              </svg>
            </div>
            <div onClick={handleEditEvent}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="none"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
            </div>
            <div onClick={handleDeleteEvent}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="none"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <AddEvent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isEdit={true}
        eventData={eventData}
      />
    </div>
  );
};

export default EventItem;