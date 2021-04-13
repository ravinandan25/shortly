import ReactDOM from 'react-dom';
import React from 'react';
import image1 from '.././images/icon-brand-recognition.svg';
import image2 from '.././images/icon-detailed-records.svg';
import image3 from '.././images/icon-fully-customizable.svg';

const Linkgen = () => {
  let textInput = React.createRef();
  let url;
  let str;
  let shortURL;
  let containerList;
  let btncpy;
  let i = 0;
  // let btn, text;
  const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(expression);

  function submitForm(e) {
    e.preventDefault();

    str = textInput.current.value;

    const emp = document.getElementById('textshorten');

    if (str !== '' && str.match(regex)) {
      url = `https://api.shrtco.de/v2/shorten?url=${textInput.current.value}/`;
      if (!str.startsWith('https://')) {
        str = 'https://' + str;
      }

      // console.log(url);

      getAPI(url);
      emp.placeholder = 'Shorten a link here..';
    } else {
      emp.value = '';
      emp.placeholder = 'Enter a Valid URL';
    }
  }
  async function getAPI(url) {
    const { ok, result } = await fetch(url).then((res) => res.json());
    if (ok === true) {
      for (const [key, val] of Object.entries(result)) {
        if (key === 'full_short_link') {
          // console.log(val);
          shortURL = val;
          break;
        }
      }
    }
    display();
    // console.log(shortURL);
  }
  const onClick = (id, idbutton) => {
    const allbtn = document.getElementsByClassName('copy');
    for (const b of allbtn) {
      // console.log(b);
      b.innerHTML = 'Copy';
      b.style.backgroundColor = '#2acfcf';
      b.style.color = 'black';
    }

    const text = document.getElementById(id);
    // console.log('clicked button id: ' + id);

    const btn = document.getElementById(idbutton);
    btn.innerHTML = 'Copied!';
    btn.style.backgroundColor = 'black';
    btn.style.color = 'white';

    text.select();
    document.execCommand('copy');
  };

  function display() {
    i = i % 3;
    const idrowform = `rowform${i}`;
    const idbutton = `button${i}`;
    const idcp = `cp${i}`;
    containerList = document.getElementById(`form_out${i}`);
    btncpy = (
      <div id={idrowform} className="rowform display_n">
        <div className="orignal">
          <input type="text" value={str} readOnly />
        </div>
        <div className="short">
          <input id={idcp} type="text" value={shortURL} readOnly />
        </div>

        <div>
          <button
            id={idbutton}
            className="btn big copy"
            onClick={() => onClick(idcp, idbutton)}
            value="Copy"
          >
            Copy
          </button>
        </div>
      </div>
    );
    ReactDOM.render(btncpy, containerList);
    const change = document.getElementById(`rowform${i}`);
    change.classList.remove('display_n');
    i++;
    const emp = document.getElementById('textshorten');
    emp.value = '';
  }

  return (
    <div className="bglink">
      <div className="voilet-bg">
        <form className="form_style">
          <div className="increase_field">
            <input
              id="textshorten"
              className="textfl"
              type="text"
              placeholder="Shorten a link here.."
              ref={textInput}
            ></input>
          </div>
          <div className="btn_increase">
            <input
              onClick={submitForm}
              className="btn cyan big"
              type="submit"
              value="Shorten It!"
            ></input>
          </div>
        </form>
      </div>
      <div id="form_out0" className="form_out"></div>
      <div id="form_out1" className="form_out"></div>
      <div id="form_out2" className="form_out"></div>

      <div className="sudo_head sudo_container">
        <h2> Advance Statistics</h2>
      </div>
      <div>
        <p className=" para sudo_container">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>

      <div className=" wrapper sudo_container">
        <div className="one back">
          <div className="img_back">
            <img className="circle" src={image1} alt="brand" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your recognition with each click. Generic links don't mean a
            thing. Breanded links helps instill confidence in your content.
          </p>
        </div>
        <div className="two back">
          <div className="img_back">
            <img className="circle" src={image2} alt="brand" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content hepls inform better decisions.
          </p>
        </div>
        <div className="three back">
          <div className="img_back">
            <img className="circle" src={image3} alt="brand" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            improve brand awareness and content discoverablilty through
            customizable links, superchanrging audience engagement.
          </p>
        </div>
      </div>
      <div className="line sudo_container"></div>
    </div>
  );
};

export default Linkgen;
