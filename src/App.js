import "./App.css";

// icons
import { FaReact, FaUser } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
import { IconContext } from "react-icons";

//toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Modals
import Modal from "react-modal";
import React, { useState } from "react";

// Tooltip
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { forwardRef } from "react";

// Countup
import CountUp, { useCountUp } from "react-countup";

// Idle Timer
import IdleTimeContainer from "./components/IdleTimeContainer";

// Color Picker
import { ChromePicker } from "react-color";

// Credit Card
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

// Datepicker
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// React Spinners - Loading
import { BounceLoader, BeatLoader, GridLoader } from "react-spinners";

// Charts 
import LineChart from "./components/charts/LineChart";
 


//toast
toast.configure();
const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}> x</button>
    </div>
  );
};

// Modals
Modal.setAppElement("#root");

// Tooltip
const ColoredToolTip = () => {
  return <span style={{ color: "skyblue" }}>Colored Component</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <button>Show Tooltip (Component) (Children) - Hover</button>{" "}
    </div>
  );
});

function App() {
  //toast
  const notify = () => {
    toast("Basic notification!", { position: toast.POSITION.TOP_LEFT });
    toast.success("Basic notification!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("Basic notification!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.warn("Basic notification!", { position: toast.POSITION.BOTTOM_LEFT });
    toast.error("Basic notification!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast(<CustomToast />, { position: toast.POSITION.BOTTOM_RIGHT });
  };

  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // CountUp

  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: false,
  });

  // Color Picker
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Credit Card  => See Example on
  //https://www.youtube.com/watch?v=HpmL7dvyRUY

  // Date Picker
  const [selctedDate, setSelctedDate] = useState(null);

  //Presentation (MDX) Deck  => See Example on
  //https://www.youtube.com/watch?v=nwTm1I1Q4cQ

  // Video Player
  //https://www.youtube.com/watch?v=7sDY4m8KNLc

  // React spinners

  // Charts

  return (
    <IconContext.Provider value={{ color: "skyblue", size: "1rem" }}>
      <div className="App">
        <h1> Icons</h1>
        <FaReact />
        <FaUser />
        {/* if you apply on an item it overrid Icon context */}
        <MdAlarm color="black" size="2rem" />
        <h1> Toast</h1>
        <button onClick={notify}> Notify</button>
        <h1> Modals</h1>
        <button onClick={() => setModalIsOpen(true)}> Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          shouldCloseOnOverlayClick={false}
          shouldCloseOnEsc={false}
          style={{
            overlay: {
              backgroundColor: "grey",
            },
            content: {
              color: "blue",
            },
          }}
        >
          <h2> Modal Title</h2>
          <p> Modal Body</p>
          <button onClick={() => setModalIsOpen(false)}> Close Modal</button>
        </Modal>
        <h1> Tooltip</h1>
        <Tippy
          arrow={false}
          delay={300}
          placement="right"
          content="This is tooltip"
        >
          <button>Show Tooltip - Hover</button>
        </Tippy>
        <br />
        <br />
        <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
          <button>Show Tooltip (HTML) - Hover</button>
        </Tippy>
        <br />
        <br />
        <Tippy placement="left" content={<ColoredToolTip />}>
          <button>Show Tooltip (Component) - Hover</button>
        </Tippy>
        <br />
        <br />
        <Tippy content={<ColoredToolTip />}>
          <CustomChild />
        </Tippy>
        <h1> Countup</h1>
        <CountUp end={200} />
        <br />
        <CountUp end={200} duration={5} />
        <br />
        <CountUp start={500} end={1000} duration={5} />
        <br />
        <CountUp end={1000} prefix="$" decimals={2} />
        <br />
        <CountUp end={1000} suffix="USD" decimals={2} />
        <br />
        Use Hooks: {countUp}
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
        <h1>Idle Timer</h1>
        <IdleTimeContainer />
        <h1>Color Picker</h1>
        <button
          onClick={() =>
            setShowColorPicker((showColorPicker) => !showColorPicker)
          }
        >
          {showColorPicker ? "Close color picker" : "Show color picker"}
        </button>
        {showColorPicker && (
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        <h4>
          You picked <span style={{ color: color }}>{color}</span>
        </h4>
        <h1>Date Picker</h1>
        <Datepicker
          selected={selctedDate}
          onChange={(newDate) => setSelctedDate(newDate)}
          dateFormat="dd/MM/yyyy"
          // minDate={new Date(2021, 5, 1, 0, 0, 0, 0)}
          // maxDate={new Date()}
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
          isClearable
          // showMonthDropdown
          showYearDropdown
          scrollableYearDropdown
        />
        <h1> Spinners</h1>
        <BounceLoader size={24} color='red' loading />
        <br />
        <br />
        <GridLoader size={48} color='skyblue' loading />
        <br />
        <br />
        <BeatLoader size={64} color='orange' loading />
        <br />
        <br />
        <LineChart />
      </div>
    </IconContext.Provider>
  );
}

export default App;
