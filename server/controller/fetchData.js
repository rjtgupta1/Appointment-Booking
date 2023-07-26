import booking from "../model/model.js";

const fetchData = async (req, res) => {
  const _paymentId = req.body.paymentId;
  const mobile_no = req.body.mobile;
  const data = await booking.find({
    $or: [{ mobile: mobile_no }, { paymentId: _paymentId }],
  });
  if (data.length) {
    res.status(200).json(data);
  } else {
    res.status(200).json({message: "Data not found" });
  }
};

export default fetchData;
