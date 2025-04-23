import { useEffect, useState } from "react";
import { getHistory } from "../Services/ApiService"; // Adjust the path if needed

// Corrected interface to match the API keys
interface History {
  volunteers: number;
  missionAccomplished: number;
  noOfDonators: number;
}

const BlackBox = () => {
  const [data, setData] = useState<History>({
    volunteers: 0,
    missionAccomplished: 0,
    noOfDonators: 0,
  });

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const value = await getHistory();
        if (value?.isSuccess && Array.isArray(value.data) && value.data.length > 0) {
          const item = value.data[0];
          setData({
            volunteers: item.volunteers || 0,
            missionAccomplished: item.missionAccomplished || 0,
            noOfDonators: item.noOfDonators || 0,
          });
        }
      } catch (error) {
        console.error("Failed to fetch history data...", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <section
        className="divider parallax layer-overlay overlay-dark-9 mobile-parallax"
        data-bg-img="images/bg/bg4.jpg"
        data-parallax-ratio="0.7"
        style={{ backgroundImage: 'url("images/bg/bg4.jpg")' }}
      >
        <div className="container pt-80 pb-80">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 mb-md-50">
              <div className="funfact text-center">
                <i className="pe-7s-smile mt-5 text-white"></i>
                <h2 className="animate-number text-white font-42 font-weight-500 mt-0 mb-0 appeared">
                  {data.noOfDonators}
                </h2>
                <h5 className="text-white text-uppercase font-weight-600">
                  Happy Donators
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mb-md-50">
              <div className="funfact text-center">
                <i className="pe-7s-rocket mt-5 text-white"></i>
                <h2 className="animate-number text-white font-42 font-weight-500 mt-0 mb-0 appeared">
                  {data.missionAccomplished}
                </h2>
                <h5 className="text-white text-uppercase font-weight-600">
                  Success Mission
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mb-md-50">
              <div className="funfact text-center">
                <i className="pe-7s-add-user mt-5 text-white"></i>
                <h2 className="animate-number text-white font-42 font-weight-500 mt-0 mb-0 appeared">
                  {data.volunteers}
                </h2>
                <h5 className="text-white text-uppercase font-weight-600">
                  Volunteer Reached
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mb-md-50">
              <div className="funfact text-center">
                <i className="pe-7s-global mt-5 text-white"></i>
                <h2 className="animate-number text-white font-42 font-weight-500 mt-0 mb-0 appeared">
                  13
                </h2>
                <h5 className="text-white text-uppercase font-weight-600">
                  Our Branches
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlackBox;
