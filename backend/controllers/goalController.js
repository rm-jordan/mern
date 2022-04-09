// @desc Get Goals
// @route GET /api/goals
// @access Private - post authentication
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals!" });
};

// @desc Set Goal
// @route POST /api/goals
// @access Private - post authentication
const setGoal = (req, res) => {
  res.status(200).json({ message: "Create goals!" });
};

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private - post authentication
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });

  // @desc Delete Goal
  // @route DELETE /api/goals/:id
  // @access Private - post authentication
  const deleteGoal = (req, res) => {
    res.status(200).json({ message: `This deletes ${req.params.id}` });
  };

  module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
  };
};
