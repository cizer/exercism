export default function () {
  return {
    compute(strand1, strand2) {
      if (strand1.length !== strand2.length) {
        throw new Error('DNA strands must be of equal length.');
      }

      return [...strand1].reduce((distance, nucleotide, index) =>
                    (nucleotide !== strand2[index]) ? ++distance : distance
                , 0);
    },
  };
}
