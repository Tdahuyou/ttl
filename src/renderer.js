// doc:
// https://www.yuque.com/yuque/developer/gfoax065u2v72isu
// https://www.yuque.com/download
window.onload = function () {
  // #region yuque editor
  const { createOpenEditor } = window.Doc;
  const yuqueEditor = document.getElementById("yuque-editor");
  // 创建编辑器
  const editor = createOpenEditor(yuqueEditor, {
    input: {},
    image: {
      isCaptureImageURL() {
        return false;
      },
    },
  });
  // 设置内容
  editor.setDocument(
    "text/lake",
    '<p><span style="color: rgb(255, 255, 255);">ttl => show current time and enable todo list editing</span></p>'
  );
  // 监听内容变动
  editor.on("contentchange", () => {
    console.info(editor.getDocument("text/lake"));
  });
  // #endregion yuque editor

  // #region time
  const dateDOM = document.getElementById("date");
  const dayDOM = document.getElementById("day");
  const timeDOM = document.getElementById("current-time");

  function updateTime() {
    const now = new Date();

    // 获取日期和时间信息
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateString = now.toLocaleDateString(undefined, options);
    const dayString = now.toLocaleDateString(undefined, { weekday: "long" });
    const timeString = now.toLocaleTimeString();

    // 更新 DOM
    dateDOM.textContent = dateString;
    dayDOM.textContent = dayString;
    timeDOM.textContent = timeString;
  }

  // 每秒更新时间
  setInterval(updateTime, 1000);
  updateTime();

  // 监听窗口尺寸改变事件，当宽度小于 1000px 时，隐藏 timeContainerDOM。
  const timeContainerDOM = document.getElementById("time-container");
  const neUI = document.querySelector(".ne-ui");
  const resize = () => {
    if (window.innerWidth < 1000) {
      timeContainerDOM.style.display = "none";
      neUI.style.display = "none";
      yuqueEditor.style.width = '100vw';
    } else {
      timeContainerDOM.style.display = "flex";
      neUI.style.display = "block";
      yuqueEditor.style.width = '50vw';
    }
  }
  window.addEventListener("resize", resize);

  resize();
  // #endregion time
};
