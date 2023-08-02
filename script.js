window.onload = () => {
    setInterval(() => {
      const currentTime = dayjs().format('hh:mm:ss A');
      document.getElementById("time").innerHTML = currentTime;
    }, 1000); // update every second
  }