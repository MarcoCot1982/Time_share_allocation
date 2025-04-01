function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Hours share calculator');
}

function calculateHours(hoursPerDay, percentages) {
  // Ensure that the percentages total 100% before calculating.
  const totalPercentage = percentages.reduce((sum, p) => sum + p.percentage, 0);
  if (totalPercentage !== 100) {
    throw new Error('Total percentage must be 100%.');
  }

  return percentages.map(p => ({
    account: p.account,
    hours: (hoursPerDay * (p.percentage / 100)).toFixed(2)
  }));
}
