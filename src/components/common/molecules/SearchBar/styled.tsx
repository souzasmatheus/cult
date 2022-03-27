export {};


`
.box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 2rem;
  border: 2px solid black;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.box input {
  width: 80%;
  height: 90%;
  border: none;
}
.box input:focus {
  outline: none;
}

.box button {
  width: 10%;
  height: 90%;
  background: none;
  border: none;
}

.box button:hover {
  opacity: 0.7;
}

.box button:active {
  transform: scale(0.9);
}

`