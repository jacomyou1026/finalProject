import "../css/myPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SingUp() {
  let [myData, setMyData] = useState([]);
  let [id, setId] = useState("");
  let [password, setPassword] = useState("");
  let [nickName, setNickName] = useState("");
  let [phone, setPhone] = useState("");
  let [category, setCategory] = useState("");
  let [postCode, setPostCode] = useState("");
  let [address1, setAddress1] = useState("");
  let [address2, setAddress2] = useState("");
  let [height, setHeight] = useState("");
  let [weight, setWeight] = useState("");
  let [gender, setGender] = useState("");

  let navigate = useNavigate();

  function saveInformationButton() {
    axios
      .post("/Member/signup", {
        memberId: id === undefined ? myData[0].memberId : id,
        password: password === undefined ? myData[0].password : password,
        nickname: nickName === undefined ? myData[0].nickname : nickName,
        phoneNm: phone === undefined ? myData[0]?.phoneNm : phone,
        address: {
          postcode: myData[0]?.address.postcode,
          address1: myData[0]?.address.address1,
          address2:
            address2 === undefined ? myData[0]?.address.address2 : address2,
        },
        length: height === undefined ? myData[0]?.length : height,
        weight: weight === undefined ? myData[0]?.weight : weight,
        gender: myData[0]?.gender,
      })
      .then((res) => {
        alert("회원가입 성공");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const categoryRadio = (e) => {
    let gender = e.target.value;
    gender === "male"
      ? setCategory(0)
      : gender === "female"
      ? setCategory(1)
      : setCategory(2);
  };

  return (
    <div className="myPageMain">
      <table width="100%">
        <tr>
          <th className="myPageTitle">OffClothes</th>
        </tr>
        <tr>
          <th className="myPageTop">회원가입</th>
        </tr>
        <hr />
        <tr>
          <td>
            <th className="myPageEssential">필수 정보</th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">아이디</th>
            <td>
              <input
                className="myPageInput"
                onChange={(e) => {
                  setId(e.target.value);
                }}
              >
                {myData[0]?.memberId}
              </input>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">비밀번호</th>
            <td>
              <input
                className="myPageInput"
                type="password"
                defaultValue={myData[0]?.nickname}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">닉네임</th>
            <td>
              <input
                className="myPageInput"
                defaultValue={myData[0]?.nickname}
                onChange={(e) => {
                  setNickName(e.target.value);
                }}
              ></input>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">전화번호</th>
            <td>
              <input
                className="myPageInput"
                defaultValue={myData[0]?.phoneNm}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              ></input>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">주소</th>
            <td>
              <input className="myPageAddressInput">
                {myData[0]?.address.postcode}
              </input>
            </td>
            <td>
              <button className="myPagePostCodeButton">우편번호 찾기</button>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList"></th>
            <td>
              <input className="myPageAddress">
                {myData[0]?.address.address1}
              </input>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList"></th>
            <td>
              <input
                className="myPageAddress"
                defaultValue={myData[0]?.address.address2}
                onChange={(e) => {
                  setAddress2(e.target.value);
                }}
              ></input>
            </td>
          </td>
        </tr>
        <hr />
        <tr>
          <td>
            <th className="myPageSelection">선택 정보</th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">나이</th>
            <td>
              <input className="myPageInput">{myData[0]?.gender}</input>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">카테고리</th>
            <td className="radioButton">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={categoryRadio}
              />
              <label for="">여성</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={categoryRadio}
              />
              <label for="">남성</label>
            </td>
          </td>
        </tr>
        <tr>
          <tr>
            <th className="myPageList">키</th>
            <td>
              <input
                className="myPageInput"
                defaultValue={myData[0]?.length}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
              ></input>
            </td>
          </tr>

          <td className="button">
            <button
              className="registerButton"
              onClick={() => {
                saveInformationButton();
              }}
            >
              저장하기
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SingUp;
