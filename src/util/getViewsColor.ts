const getViewsColor = (views: number) => {
  if (views >= 0 && views <= 25) {
    return { color: "tomato", contrastColor: "#242823" };
  } else if (views >= 26 && views <= 50) {
    return { color: "orange", contrastColor: "#3B4139" };
  } else if (views >= 51 && views <= 75) {
    return { color: "yellow", contrastColor: "#6A7365" };
  } else if (views >= 76 && views <= 100) {
    return { color: "green", contrastColor: "#F0F0F0" };
  } else {
    return { color: "green", contrastColor: "#F0F0F0" };
  }
};

export default getViewsColor;
