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
        message: `Em à! anh có vài điều muốn nói với em ^^=.`,
        time: 5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: `Chúng ta đã có mỗi tình khoảng thời gian thật đẹp và đang nhẽ đến giờ nó vẫn <b>đang diễn ra</b> ${getDayCount()} ngày.`,
        time: 5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Nhưng chỉ vì thoáng nóng giận đã hủy hoại 2 trái tim <b>yêu thương nhau.</b> 💔',
        time: 3,
    }, {
        type: TYPE_MESSAGE.ICON,
        message: 'images/img_cry_1.webp',
        time: 2.5,
    },
    {
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
        message: 'Nhưng sau khoảng thời gian ấy a mới biết mình <b class="hl">yêu em</b> đến nhường nào. A biết chắc chắn một điều, người ở lại sẽ là người <b class="hl">ôm nhiều vấn vương.</b>',
        time: 4.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Nực cười thật đấy... mình chỉ nóng giận có vài tiếng thôi. Nhưng lại ôm <b>đau thương</b> suốt 1 quãng đường dài',
        time: 3.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Hằng ngày đi làm chỉ muốn về <b class="hl">được nhìn thấy em.</b> Lòng anh được an ủi giữa chốn Hà Nội ồn ào đông đúc.',
        time: 4,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Trước khi đi ngủ anh đều phải nghĩ giả vờ như mình vẫn còn đang <b class="hl">hạnh phúc bên nhau.</b> Rồi chìm vào cùng giấc mơ đó.',
        time: 5,
    },
    {
        type: TYPE_MESSAGE.ICON,
        message: 'images/sleep.webp',
        time: 2.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Nhưng khi tỉnh dậy thì thực tại phũ phàng rằng <span>"không có em bên cạnh" </span> lại hiện ra trước mắt',
        time: 4,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Anh lại phải tự <b>lừa dối</b> bản thân mình. Che đi <b>nỗi buồn</b> và mạnh mẽ để đối mặt với bao khó khăn thử thách',
        time: 5,
    },
    {
        type: TYPE_MESSAGE.ICON,
        message: 'images/img_cry_3.webp',
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
        message: 'A đã quá nghĩ ngợi vào công việc và bỏ quyên những thứ trước mắt. A nghĩ về sau này nhiều hơn những gì a đang có',
        time: 3.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'A nhận ra a đã vô tình đánh mất thời gian đáng lẽ ra phải dành cho em',
        time: 3.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Anh đã mắc phải sai lầm của tuổi trẻ... Em à! nếu được ở cạnh em 1 lần nữa. Thì sai lầm đó là món quà vô giá với anh',
        time: 6,
    }, 
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Nó giúp anh hiểu ra em là người <b>quan trọng</b> với anh. Nó nhắc anh phải <b>hy sinh và dành</b> cho em nhiều hơn...',
        time: 5,
    }, 
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Buồn nhỉ :(( ? Chia tay mà còn  <b class="hl">yêu</b> như thế, có thể quay <b class="hl">trở lại</b> không em? =((',
        time: 5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Có một tràng trai đã từng: nhịn ăn mỗi buổi trưa lúc trời đông lạnh buốt, lo lắng mỗi khí em bị ốm, mua các món ăn em thích...',
        time: 5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Từng trở em đi trên các con phố, ở bên cạnh an ủi em mỗi lúc em buồn..',
        time: 5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Từng trao nụ hôn ngọt ngào, nắm tay em trên con đường ấy... Luôn cố gắng vì tương lai 2 đứa sau này',
        time: 4.5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Có một người con gái đã từng: Yên tâm tin tưởng nơi chàng trai đó, thích được chàng trai đó cưng chiều',
        time: 5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Quan tâm lo lắng từng bữa ăn giấc ngủ, đến cả quần áo để mặc... thích được chàng trai đó âu yếm, sấy tóc, mỗi khi tắm xong',
        time: 5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Luôn nhắc nhở chàng trai ra ngoài phải cẩn thận, đi đến nới nhớ nhắn tin cho em',
        time: 5,
    },
    {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Hai người họ đã yêu thương nhau và cùng vượt qua những khó khăn trong cuộc sống',
        time: 5,
    },
     {
        type: TYPE_MESSAGE.MESSAGE,
        message: 'Em là  <b class="hl">công chúa</b> là <b class="hl">báu vật</b> của a. A hứa sẽ yêu thường em nhiều hơn dành tất cả cho em. Đừng rời xa và <b class="hl">tha thứ</b> cho anh em nhé',
        time: 6.5,
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
