// @desc Get Goals
// @route GET /api/goals
// @access Private - post authentication
const getGoals = async (req, res) => {
  res.status(200).json({ message: "Get goals!" });
};

// @desc Set Goal
// @route POST /api/goals
// @access Private - post authentication

// mongoose operates with a promise therefore async/await

const setGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error(" Please add a text field!");
  }
  res.status(200).json({ message: "Create goals!" });
};

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private - post authentication
const updateGoal = async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private - post authentication
const deleteGoal = async (req, res) => {
  res.status(200).json({ message: `This deletes ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};