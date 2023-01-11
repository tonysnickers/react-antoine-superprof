import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieReviews } from "api/search";
import DataContainer from "components/data-container";
import { useSendReview } from "api/review";

export default function Reviews() {
  const { movie } = useParams();
  const navigate = useNavigate();
  const { loading, reviews, error } = getMovieReviews(movie);
  const [review, setReview] = useState("");
  const { onSendReview, isSending, isSent } = useSendReview();

  const onClickSendReview = async () => {
    await onSendReview(review);
    setReview("");
  };
  return (
    <>
      <button onClick={() => navigate(-1)}>&#x2190;</button>
      <h1>Reviews</h1>
      <DataContainer loading={loading} error={error}>
        <>
          {reviews.map((review, i) => (
            <div key={i}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </div>
          ))}
          <div>
            <h4>Write a review</h4>
            {isSent ? (
              <div>
                your review has been sent and will be moderated before
                publication, thank you!
              </div>
            ) : (
              <div style={{ display: "block" }}>
                <textarea onChange={(e) => setReview(e.target.value)} />
                <button onClick={onClickSendReview} disabled={isSending}>
                  {isSending ? "sending..." : "send review"}
                </button>
              </div>
            )}
          </div>
        </>
      </DataContainer>
    </>
  );
}
