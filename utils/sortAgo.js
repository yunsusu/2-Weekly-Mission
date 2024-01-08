export function sortAgo(min) {
  if (min < 2) {
    return "1 minute ago";
  } else if (min <= 59) {
    return `${min} minutes ago`;
  } else if (min / 60 <= 23) {
    return `${Math.ceil(min / 60)} hour ago`;
  } else if (min / 60 >= 24 && min / 60 / 24 < 2) {
    return `1 day ago`;
  } else if (min / 60 / 24 >= 2 && min / 60 / 24 <= 30) {
    return `${Math.ceil(min / 60 / 24)} days ago`;
  } else if (min / 60 / 24 > 30 && min / 60 / 24 <= 60) {
    return `1 month ago`;
  } else if (min / 60 / 24 > 60 && min / 60 / 24 <= 365) {
    return `${Math.ceil(min / 60 / 24 / 30)} months ago`;
  } else if (min / 60 / 24 > 365 && min / 60 / 24 <= 730) {
    return `1 year ago`;
  } else {
    return `${Math.ceil(min / 60 / 24 / 365)} years ago`;
  }
}
