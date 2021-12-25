let element = "";
const getDayCount = () => {
    const countDownDate = new Date("Nov 8, 2019 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = now - countDownDate;
    return Math.floor(distance / (1000 * 60 * 60 * 24));
}

const TYPE_MESSAGE = {
    ICON: 'icon',
    IMAGE: 'image',
    MESSAGE: 'message',
}

const listMessage = [
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: `Em à! anh có vài điều muốn nói với em =^^.`,
        time: 5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: `Chúng ta đã có mỗi tình khoảng thời gian thật đẹp và đang nhẽ đến giờ nó vẫn <b>đang diễn ra</b> ${getDayCount()} ngày.`,
        time: 5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Nhưng chỉ vì thoáng nóng giận anh đã hủy hoại 2 trái tim <b>yêu thương nhau.</b> 💔',
        time: 3,
    }, {
        type: TYPE_MESSAGE.ICON,
        message: 'images/img_cry_1.webp',
        time: 2.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Anh biết anh là người đàn ông xấu xa tồi tệ. Đã khiến em phải chịu nhiều <b>thiệt thòi</b> 😭',
        time: 3.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'A cũng chẳng biết chân trọng người mà anh <b class="hl">yêu thương nhất</b> đó là <b>em</b>...',
        time: 3.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Nhưng e có biết không. Cuộc sống chúng ta còn <b>dài và còn nhiều khó khăn</b> đang chờ đợi phía trước',
        time: 3.5,
    }, {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Lúc đấy chúng ta sẽ cần một người <b class="hl">luôn bên cạnh</b> quan tâm và chia sẻ buồn vui...',
        time: 3.5,
    }, {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Sai lầm để ta trở nên <b>tốt hơn</b>. Sai lầm là món quà của tuổi trẻ...nhưng ta chỉ có quyền mắc sai lầm một lần.',
        time: 4,
    }, {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Em có biết điều <b>đau lòng</b> nhất khi yêu là gì không? Là khi cả 2 vẫn còn tình cảm, nhưng một người đã <span>không muốn ở lại nữa</span>.',
        time: 4.5,
    },
    {
        type: TYPE_MESSAGE.ICON,
        message: 'images/img_cry_2.webp',
        time: 2.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Mỗi người sẽ có một <b>lí do</b> của riêng mình. Cảm thấy bản thân không còn <span>quan trọng</span> với người kia, mệt mỏi, <span>không còn muốn cố gắng</span>, trong lòng đã có quá <span>nhiều tổn thương.</span>',
        time: 6,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Có lẽ là do tình yêu đã vơi đi nhiều rồi.... <b>anh không chắc nữa</b>. Nhưng chắc chắn một điều, người ở lại sẽ là người <b class="hl">ôm nhiều vấn vương.</b>',
        time: 4,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Nực cười thật đấy... mình chỉ nóng giận có vài tiếng thôi. Nhưng lại ôm <b>đau thương</b> suốt 1 quãng đường dài',
        time: 3.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Một mình anh lang thang <b>chốn cũ</b>, <b>lòng quặn đau nước mắt ướt nhòa</b> chẳng thể nào biết được, liệu mai sau có thể <b>gặp lại</b> nữa...',
        time: 4,
    }, {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Hằng ngày đi làm chỉ muốn về <b class="hl">được nhìn thấy em.</b> Lòng anh được an ủi giữa chốn Hà Nội ồn ào đông đúc.',
        time: 3,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Trước khi đi ngủ anh đều phải nghĩ giả vờ như mình vẫn còn đang <b class="hl">hạnh phúc bên nhau.</b> Rồi chìm vào cùng giấc mơ đó.',
        time: 3.5,
    },
    {
        type: TYPE_MESSAGE.ICON,
        message: 'images/sleep.webp',
        time: 2.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Nhưng khi tỉnh dậy thì thực tại phũ phàng rằng <span>"không có em bên cạnh" </span> lại hiện ra trước mắt',
        time: 3.2,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Anh lại phải tự <b>lừa dối</b> bản thân mình. Che đi <b>nỗi buồn</b> và mạnh mẽ để đối mặt với những khó khăn trong cuộc sống.',
        time: 3.6,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Ngàn lần anh yếu đuối, ngàn lần để nước mắt rơi. Để rồi chợt nhận ra năm tháng kia cũng đã vội qua.',
        time: 3.2,
    },
    {
        type: TYPE_MESSAGE.ICON,
        message: 'images/img_cry_3.webp',
        time: 2.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Buồn nhỉ :(( ? Chia tay mà còn  <b class="hl">yêu</b> như thế, có thể quay <b class="hl">trở lại</b> không em? =((',
        time: 4,
    },
];

for (let i = 1; i <= 32; i++) {
    listMessage.push({
        type: TYPE_MESSAGE.IMAGE,
        message: `images/dubinh/${i}.jpg`,
    })
}

const renderTemplate = (child, className, index) => {
    return `<div class="box-message box-message-${index}">
    <img class="avatar-message" src="images/Avatar.png" />
    <div class="message ${className || ""}">
        ${child}
    </div>
</div>`;
};

const renderChildElement = (item) => {
    switch (item.type) {
        case TYPE_MESSAGE.ICON:
            return `<img src="${item.message}" />`;
        case TYPE_MESSAGE.IMAGE:
            return `<img src="${item.message}" class="image-view"/><img class="icon-heart" src="images/icon_heart.png" />`;
        default:
            return item.message
    }
}

const initElement = () => {
    listMessage.forEach((item, index) => {
        element += renderTemplate(renderChildElement(item), item.type, index);
    });
    document.getElementById('box-message-container').innerHTML = element;

};

initElement();
// Animation Timeline
const animationTimeline = () => {

    const tl = new TimelineMax();

    tl
        .to(".container", 2, {
            visibility: "visible"
        })


    listMessage.forEach((item, index) => {
        tl.from(`.box-message-${index}`, 0.7, {
            opacity: 0,
            y: 10,
        })
            .to(
                `.box-message-${index}`,
                0.7,
                {
                    opacity: 0,
                    y: 10,
                },
                `+=${item?.time || 3}`
            )
    })

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
    return new Promise((resolve, reject) => {
        fetchData();
        resolve("Fetch done!");
    });
};

resolveFetch().then(animationTimeline());