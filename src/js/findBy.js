export default function findBy(key, value) {
  return (item) => item[key] === value;
}
