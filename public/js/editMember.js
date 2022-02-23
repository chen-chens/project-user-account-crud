

// editMember.html
const editform = document.getElementById("editform");
editform.addEventListener("submit", (e) => {
    // stop default behavior: submit
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    axios({
        method: formValues._method,
        url: `http://localhost:5500/api/users/${formValues._id}`,
        data: formValues
    }).then(response => {
        alert("編輯成功！")
    }).catch(err => {
        console.log("編輯失敗: ", err.response.data.message)
    })
})