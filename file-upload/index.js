const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const dragText = document.querySelector(".text");
const text = document.querySelector(".text");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const img = document.querySelector(".preview-img");
let file;

function defaultBtnActive() {
    defaultBtn.click();
}

defaultBtn.addEventListener("change", function () {
    file = this.files[0];
    fileValue = this.files[0].name;
    wrapper.classList.add("active");
    fileName.textContent = fileValue;

    //사용자 선택파일을 가져오면, [0]번째 파일만 선택함을 의미한다.
    showFile(); //calling function
});


//If user Drag File Over wrapper
wrapper.addEventListener("dragover", (event) => {
    event.preventDefault();
    dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from wrapper
wrapper.addEventListener("dragleave", () => {
    dragText.textContent = "No file chosen, yet!";
});

//If user drop File on wrapper
wrapper.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    fileValue = event.dataTransfer.files[0].name;
    console.log(fileValue);
    fileName.textContent = fileValue;
    //사용자 선택파일을 가져오면, [0]번째 파일만 선택함을 의미한다.
    showFile(); //calling function
});

function showFile() {
    let fileType = file.type; //파일의 타입을 가진다.
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //일부 유효한 이미지 확장 기능 사용
    if (validExtensions.includes(fileType)) { //유저가 이미지 파일을 선택한다면?
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result; //파일에 사용자 파일 원본 저장URL 변수
            img.src = result; //img 태그 생성 및 src 속성 내에서 사용자 선택 파일 소스 전달
            wrapper.classList.add("active");
            //wrapper에 imgTag 추가
            cancelBtn.addEventListener("click", function () {
                img.src = "";
                wrapper.classList.remove("active");
            })
        }
        reader.readAsDataURL(file);
    } else {
        alert("This is not an Image File!");
        wrapper.classList.remove("active");
        dragText.textContent = "No file chosen, yet!";
    }
}
