let element = "";
const getDayCount = () => {
  const countDownDate = new Date("Nov 8, 2019 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = now - countDownDate;
  return Math.floor(distance / (1000 * 60 * 60 * 24));
};

const TYPE_MESSAGE = {
  ICON: "icon",
  IMAGE: "image",
  MESSAGE: "message",
};

const listMessage = [
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: `Bé ơi!...`,
    time: 6,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: `Em còn nhớ tới anh dù chỉ là 1 chút nào không?`,
    time: 6,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: `Còn anh từng giây từng phút mình thuộc về nhau chưa một ngày nào anh quên`,
    time: 6,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: `Bởi vì thực sự anh chưa hề muốn xa em...`,
    time: 6,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: `Chúng ta đã có khoảng thời gian thật đẹp và đang nhẽ đến giờ nó vẫn đang diễn ra <b>${getDayCount()}</b> ngày.`,
    time: 5.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Nhưng chỉ vì thoáng nóng giận mà a đã hủy hoại 2 trái tim <b>yêu thương nhau.</b> 💔",
    time: 4,
  },
  {
    type: TYPE_MESSAGE.ICON,
    message: "images/img_cry_1.webp",
    time: 2.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Đọc lại những dòng tin nhắn trước đây mà anh thấy có lỗi với em rất nhiều...",
    time: 5.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Những lần nông nổi đó là sự non nớt trẻ người non dạ của anh.",
    time: 7.2,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Bây giờ a chỉ biết tự trách mình. Đáng lẽ anh cần bình tĩnh hơn trong mọi trường hợp",
    time: 5.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Em còn nhớ không?",
    time: 4.2,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message:
      "Có một tràng trai đã từng: nhịn ăn mỗi buổi trưa lúc trời đông lạnh buốt để tiết kiệm tiền chăm sóc người mình yêu",
    time: 7,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Lo lắng chăm sóc mỗi khi em bị ốm, mua các món ăn em thích...",
    time: 5,
  },

  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Trở em đi trên các con phố, cùng em đi đến những nơi em muốn đi",
    time: 5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Cùng em gây dựng tất cả... luôn cố gắng vì tương lai 2 đứa sau này",
    time: 4.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Có một người con gái: yên tâm tin tưởng nơi chàng trai đó, thích được chàng trai đó cưng chiều",
    time: 5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Quan tâm lo lắng từng bữa ăn giấc ngủ...",
    time: 5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Luôn nhắc nhở chàng trai ra ngoài phải cẩn thận, đi đến nới nhớ nhắn tin cho em",
    time: 5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Họ cùng yêu thương nhau và vượt qua những khó khăn trong cuộc sống.",
    time: 7,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Nhiều kỉ niệm vui buồn mà anh không thể kể hết chỉ bằng vài dòng",
    time: 5,
  },
  {
    type: TYPE_MESSAGE.ICON,
    message: "images/img_couple.gif",
    time: 3.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "A xin lỗi đã không thể thấu hiểu mỗi khi em nhắc nhở anh",
    time: 5.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Và cư xử như đứa trẻ con khiến em tổn thương",
    time: 4.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Ngàn lần xin lỗi cũng không thể xoá bỏ hết những tổn thương a gây ra",
    time: 4.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Nhưng mong em nhìn vào những gì chúng ta đã cùng cố gắng vì nhau",
    time: 4.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Mà cảm nhận được tình yêu và lời xin lỗi của anh",
    time: 4.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Tha thứ cho anh một cơ hội dù là nhỏ nhất",
    time: 5.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message: "Đó là điều anh mong mỏi chờ đợi ngày qua ngày",
    time: 5.5,
  },
  {
    type: TYPE_MESSAGE.MESSAGE,
    message:
      "Đừng chặn anh nữa nhé... nick Facebook Lê Huy Du vẫn đang là đương kim vô địch đợi bỏ block từ An Bình đấy huhu 😭",
    time: 7.5,
  },
];

for (let i = 34; i >= 1; i--) {
  listMessage.push({
    type: TYPE_MESSAGE.IMAGE,
    message: `images/dubinh/${i}.jpg`,
  });
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
      return item.message;
  }
};

const initElement = () => {
  listMessage.forEach((item, index) => {
    element += renderTemplate(renderChildElement(item), item.type, index);
  });
  document.getElementById("box-message-container").innerHTML = element;
};

initElement();
// Animation Timeline
const animationTimeline = () => {
  const tl = new TimelineMax();

  tl.to(".container", 2, {
    visibility: "visible",
  });

  listMessage.forEach((item, index) => {
    tl.from(`.box-message-${index}`, 0.7, {
      opacity: 0,
      y: 10,
    }).to(
      `.box-message-${index}`,
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      `+=${item?.time || 3}`
    );
  });

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
