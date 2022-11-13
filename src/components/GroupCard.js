import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";

export default function GroupCard({ name, description, amount, bill, gray }) {
  const classNames = [];
  if (amount >= bill) {
    classNames.push("bg-success", "bg-opacity-10");
  } else if (gray) {
    classNames.push("bg-light");
  }
  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <Stack direction="vertical" gap="2">
            <div className="me-2">{name}</div>
            <div className="text-muted fs-6">{description}</div>
          </Stack>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            <span className="text-muted fs-6 ms-1">
              / {currencyFormatter.format(bill)}{" "}
            </span>
          </div>
        </Card.Title>
        <ProgressBar
          className="rounded-pill"
          variant={getProgessBarVariant(amount, bill)}
          min={0}
          max={bill}
          now={amount}
        />
        <Stack direction="horizontal" gap="2" className="mt-4">
          <Button variant="outline-primary" className="ms-auto">
            Add Expense
          </Button>
          <Button variant="outline-secondary">View Expenses</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

function getProgessBarVariant(amount, bill) {
  const ratio = amount / bill;
  if (ratio < 0.5) return "danger";
  if (ratio < 0.75) return "warning";
  return "primary";
}
