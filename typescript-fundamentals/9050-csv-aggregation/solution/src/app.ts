import * as fs from 'fs';

if (process.argv.length < 3) {
  console.error('Usage: node app.js <path-to-inputfile>.csv');
  process.exit(-1);
}

fs.readFile(process.argv[2], 'utf8', (err, content) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  const lines = content.split('\n');
  const header = lines.splice(0, 1)[0];
  const headerCols = header.split(',');
  const indexCustomerId = headerCols.indexOf('customerid');
  const indexRevenue = headerCols.indexOf('revenue');
  const rows = lines.map(line => {
    const cols = line.split(',');
    return {
      customerId: cols[indexCustomerId],
      revenue: parseFloat(cols[indexRevenue])
    };
  });

  const stats: any = {};
  rows.forEach(
      row => stats[row.customerId] =
          (stats[row.customerId] || 0) + row.revenue);

  console.log('| customerid |    revenue |');
  console.log('|------------|------------|');
  for (const statRow in stats) {
    const revenueString = (Math.round(stats[statRow] * 10) / 10).toString().padStart(10);
    console.log(`| ${statRow.padEnd(10)} | ${revenueString} |`);
  }
});