exports.handler = async function () {
  const res = await fetch(
    'https://api.airtable.com/v0/app3PaRCny9Mjr5I2/tblLUOPyOSF1CDUb8',
    { headers: { Authorization: 'Bearer ' + process.env.AIRTABLE_TOKEN } }
  );
  const data = await res.json();
  const sorted = data.records.sort((a, b) => new Date(a.createdTime) - new Date(b.createdTime));
  const records = sorted.map((r, i) => ({
    id: i + 1,
    title: r.fields.Title,
    category: r.fields.Catagory,
    price: r.fields.Price,
    size: r.fields.Size,
    medium: r.fields.Medium,
    image: r.fields.Attachment ? r.fields.Attachment[0].url : null,
    available: r.fields.Available || false,
  }));
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(records),
  };
};
