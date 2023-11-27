const sendEmailController = (req, res) => {
  try {
    return res.status(200).send({
      success: true,
      message: "Your message send successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "send email API Error",
      error,
    });
  }
};
module.exports = { sendEmailController };
