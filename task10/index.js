function hndelLoopFn(start, end, breakNum, continueLoop) {
  if (start && end && breakNum && continueLoop) {
    if (start < end) {
      for (let i = start; i < end; i++) {
        if (i === continueLoop) {
          continue;
        }
        if (i === breakNum) {
          continue;
        }
        console.log(i);
      }
    } else if (start > end) {
      for (let i = start; i > end; i--) {
        if (i === continueLoop) {
          continue;
        }
        if (i === breakNum) {
          continue;
        }
        console.log(i);
      }
    }
  } else {
    console.log("Please provide valid parameters");
  }
}

hndelLoopFn(1, 10, 5, 2);
hndelLoopFn(10, 1, 5, 2);

hndelLoopFn(10, 1, 5);
