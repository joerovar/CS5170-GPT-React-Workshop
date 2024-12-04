import { FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { z } from "zod";
import {
  createLikeService,
  createExpertResponseService,
} from "../services/backend-service";
import "./ParkingQueryForm.css";
import Markdown from "markdown-to-jsx";

const schema = z.object({
  interest: z.string(),
  neighborhood: z.string(),
  values: z.string(),
  lingo: z.string(),
});
type FormData = z.infer<typeof schema>;

const formatString = (interest, neighborhood, values, lingo) =>
  `The user is most interested (but not exclusively) on: [${interest}], in the following neighborhood: [${neighborhood}], and what they value the most (not exclusively) is: [${values}], and their familiarity with urban planning is: [${lingo}].`;

const ParkingQueryForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [queryResponse, setQueryResponse] = useState("");
  const [csvData, setCsvData] = useState([]);
  const [isThumbClicked, setIsThumbClicked] = useState(false);

  useEffect(() => {
    fetch("/data/nhood_summary.csv")
      .then((response) => response.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          complete: (results) => setCsvData(results.data),
        });
      });
  }, []);

  const onLike = () => {
    const { request } = createLikeService().post([
      { role: "user", content: queryResponse },
    ]);
    request.catch((err) => setError(err.message));
    console.log("Liked!");
    setIsThumbClicked(true); // Set the button to the clicked state
  };

  const onSubmit = (data: FieldValues) => {
    setIsLoading(true);
    const { request } = createExpertResponseService().postMessages([
      { role: "user", content: formatString(data.interest, data.neighborhood, data.values, data.lingo) },
    ]);

    request
      .then((res) => {
        setQueryResponse(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  return (
<div>
  <form onSubmit={handleSubmit(onSubmit)}>
    {error && <p className="text-danger">{error}</p>}
    <div className="mb-3">
      <label htmlFor="interest" className="form-label">What are you most interested in?</label>
      <select {...register("interest")} id="interest" className="form-select">
        <option value="">Select an interest</option>
        <option value="affordable housing">Affordable housing</option>
        <option value="bus/bike lanes">Bus/Bike lanes</option>
        <option value="parks">Parks</option>
      </select>
      <label htmlFor="neighborhood" className="form-label">What neighborhood are you interested in?</label>
      <select {...register("neighborhood")} id="neighborhood" className="form-select">
        <option value="">Select a neighborhood</option>
        <option value="Alewife">Alewife</option>
        <option value="Central">Central</option>
        <option value="Dorchester">Dorchester</option>
        <option value="Jamaica Plain">Jamaica Plain</option>
        <option value="Roxbury">Roxbury</option>
        <option value="South Boston">South Boston</option>
      </select>
    </div>
    <label htmlFor="values" className="form-label">What do you value the most?</label>
    <select {...register("values")} id="values" className="form-select">
      <option value="">Select a value</option>
      <option value="Affordability">Affordability</option>
      <option value="Social mixing">Social mixing</option>
      <option value="Car-free mobility">Car-free mobility</option>
      <option value="Safety">Safety</option>
    </select>
    <label htmlFor="lingo" className="form-label">How familiar are you with urban planning language?</label>
    <select {...register("lingo")} id="lingo" className="form-select">
      <option value="">Select a familiarity level</option>
      <option value="not familiar">Not familiar</option>
      <option value="familiar">Familiar</option>
    </select>
    <button type="submit" className="btn btn-primary mb-3">Generate</button>
    <button type="button" className="btn btn-secondary mb-3 ms-2" onClick={() => reset()}>Clear</button>
  </form>
  {isLoading && <div className="spinner-border"></div>}
  {queryResponse && (
    <div>
      <div className="response-box mt-3">
        <Markdown>{queryResponse}</Markdown>
      </div>
      <button
        className={`btn thumbs-up-btn mb-3 ${isThumbClicked ? "clicked" : ""}`}
        onClick={onLike}
      >
        Like 👍
      </button>
    </div>
  )}
  {queryResponse && (
    <table className="table small-table">
      <thead>
        <tr>
          <th>Neighborhood</th>
          <th>Samples</th>
          <th>Rent per Unit</th>
          <th>#Jobs within 30 minutes</th>
          <th>Walk Score</th>
          <th>People per Building</th>
        </tr>
      </thead>
      <tbody>
        {csvData.map((row, index) => (
          <tr key={index}>
            <td>{row.nhood}</td>
            <td>{row.sample_size}</td>
            <td>{row.rent_punit}</td>
            <td>{row.jobs_30min}</td>
            <td>{row.walk_score}</td>
            <td>{row.bg_pop_den}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
      // )}
      // <br />

    // </div>
  );
};

export default ParkingQueryForm;