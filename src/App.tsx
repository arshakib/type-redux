import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./App.css";
import { useState } from "react";
import Cards from "./cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { incrementByAmount } from "./AllTask/AllTask";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 224,
      width: 250,
    },
  },
};

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  console.log("count", count);
  const dispatch = useDispatch();
  const [allTasks, setAllTasks] = useState<{ task: number; status: string }[]>(
    []
  );
  const names = ["Pending", "In Progress", "Completed"];

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.target);
    // const taskInput = form.elements.namedItem("task") as HTMLInputElement;
    // const statusInput = form.elements.namedItem("status") as HTMLInputElement;
    // const task = taskInput.value;
    // const status = statusInput.value;
    const taskValue = form.get("task");
    if (!taskValue || isNaN(Number(taskValue))) {
      throw new Error("Invalid task value");
    }
    const task = Number(taskValue);
    const status = form.get("status") as string;

    setAllTasks([...allTasks, { task, status }]);

    dispatch(incrementByAmount({ task, status }));
  };

  console.log(allTasks);
  return (
    <>
      <form onSubmit={handleChange}>
        <div className="mt-11 w-1/2 mx-auto">
          <TextField fullWidth name="task" label="fullWidth" id="fullWidth" />
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Name</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                name="status"
                defaultValue={[]}
                MenuProps={MenuProps}
              >
                {names.map((name: string) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <Button type="submit" variant="contained">
            Contained
          </Button>
        </div>
      </form>

      <div>
        <Cards></Cards>
      </div>
    </>
  );
}

export default App;
