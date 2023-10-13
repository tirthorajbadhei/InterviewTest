import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const CreateAds = () => {
    const navigate=useNavigate()
    const [selectedOption, setSelectedOption] = useState("text");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div className="container shadow-lg mt-5">
                <div className="row m-auto text-center">
                    <div className="col mt-5">
                        <div className="card">
                            <label className="radio-btn">
                                <input
                                    class="form-check-input" type="checkbox" 
                                    value="text"
                                    checked={selectedOption === "text"}
                                    onChange={handleOptionChange}
                                />
                                <span className="radio-mark"></span>
                            </label>
                            Create Text Ad
                        </div>
                    </div>
                    <div className="col mt-5">
                        <div className="card">
                            <label className="radio-btn">
                                <input
                                   class="form-check-input" type="checkbox" 
                                    value="media"
                                    checked={selectedOption === "media"}
                                    onChange={handleOptionChange}
                                />
                                <span className="radio-mark"></span>
                            </label>
                            Create Media Ad
                        </div>
                    </div>
                </div>
                <div className="container text-end mt-5">
                {selectedOption === "text" ? (
                    <button className="btn btn-info" onClick={()=>navigate('/TextAd')}>Next</button>
                ) : (
                    <button className="btn btn-info" onClick={()=>navigate('/MediaAd')}>Next</button>
                )}
            </div>
            </div>

            
        </>
    );
};

export default CreateAds;
