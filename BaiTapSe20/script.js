//mảng gốc
let songs = JSON.parse(localStorage.getItem("songs")) || [];

//truy xuất

let editId = null;
//tạo
function addSong(e) {
    e.preventDefault();

    const titleInput = document.getElementById("title");
    const artistInput = document.getElementById("artist");

    const title = titleInput.value.trim();
    const artist = artistInput.value.trim();

    if (!title || !artist) {
        alert("Không được để trống");
        return;
    }

    // cập nhật trong add
    if (editId !== null) {
        let index = songs.findIndex(s => s.id === editId);

        songs[index].name = title;
        songs[index].singer = artist;

        // reset trạng thái
        editId = null;
        document.getElementById("formTitle").innerText = "🎵 Thêm bài hát";
        document.getElementById("submitBtn").innerText = "Thêm";
    }
    // thêm
    else {
        const newSong = {
            id: songs.length ? songs[songs.length - 1].id + 1 : 1,
            name: title,
            singer: artist,
        };

        songs.push(newSong);
    }

    // lưu localStorage
    localStorage.setItem("songs", JSON.stringify(songs));

    // reset form
    titleInput.value = "";
    artistInput.value = "";

    // render lại
    renderSong();
}

//sửa
function editSong(id) {
    let song = songs.find(s => s.id === id);

    // cho lại chỗ edit thành value 2 ô
    document.getElementById("title").value = song.name;
    document.getElementById("artist").value = song.singer;

    // đổi tiêu đề + nút
    document.getElementById("formTitle").innerText = "Sửa bài hát";
    document.getElementById("submitBtn").innerText = "Cập nhật";

    editId = id;
}

//hiển thị
function renderSong(data = songs) {
    let songList = document.getElementById("songTable");
    // trang giấy mới chx có gì
    songList.innerHTML = "";
    //duyệt để đẩy
    data.forEach((song) => {
        //dán giấy vào tường
        songList.innerHTML += `<tr>
                    <td>${song.id}</td>
                    <td>${song.name}</td>
                    <td>${song.singer}</td>
                    <td>
                    <button onclick="editSong(${song.id})">Sửa</button>
                    <button onclick="deleteSong(${song.id})">Xóa</button>
                    </td>
                </tr>
        `
    });

    if (data.length === 0) {
        songList.innerHTML += `
            <tr>
                <td colspan="4" style="text-align:center;">
                    Chưa có bài hát nào
                </td>
            </tr>
        `;
    }
}

//xóa bài hát
function deleteSong(id) {
    if (confirm("Bạn có chắc muốn xóa bài hát này?")) {
        songs = songs.filter(song => song.id !== id);
        renderSong(songs);
    } else {
        return false;
    }
}

//tìm tên bài hát
function searchSong() {
    //tìm theo tên và lấy gtri nhập
    const findSongEl = document.getElementById("search");
    let findSong = findSongEl.toLowerCase().value;
    let song = songs.filter((song) => song.singer.toLowerCase().includes(findSong));

    renderSong(song);
}

renderSong();
