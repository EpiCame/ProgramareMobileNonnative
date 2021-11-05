export default function validate(title, producer, firstYear, lastYear, noSeasons, rating) {
    if (title && producer && firstYear && lastYear
        && noSeasons && rating) {
      return (
        title.toString() !== '' &&
        producer.toString() !== '' &&
        firstYear.toString() !== '' && 
        lastYear.toString() !== '' && 
        noSeasons.toString() !== '' &&
        rating.toString() !== ''
      );
    } else {
      return false;
    }
  }