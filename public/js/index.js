const addMemberBtn = document.getElementById("addMember");
addMemberBtn.addEventListener("click", ()=> {
    location.href = "http://localhost:5500/addMember";
});


function handleEdit(id){
    location.href = `http://localhost:5500/editMember?id=${id}`;
};

function handleDelete(id){
    if(confirm("確定要執行「刪除」？")){
        axios
        .delete(`http://localhost:5500/api/users/${id}`)
        .then(res => {
            location.reload();
            
        }).catch(err => {
            console.log("刪除失敗: ", err.response.data.message)
        })
    }
};


