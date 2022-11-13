import Container from "react-bootstrap/Container";
import { Button, Stack } from "react-bootstrap";
import GroupCard from "../components/GroupCard";
import AddGroupModal from "../components/addGroupModal";
import { useState } from "react";
import { useGroups } from "../contexts/GroupsContext";
export default function Home() {
  const [showAddGroupModal, setShowAddGroupModal] = useState(false);
  const { groups } = useGroups(); // THIS SHOULD BE FROM THE API INSTEAD

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Groups</h1>
          <Button variant="primary" onClick={() => setShowAddGroupModal(true)}>
            Add Group
          </Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {groups.map((group) => (
            <GroupCard
              key={group.id}
              name={group.name}
              description={group.description}
              amount={group.amount}
              bill={group.bill}
            ></GroupCard>
          ))}
        </div>
      </Container>
      <AddGroupModal
        show={showAddGroupModal}
        handleClose={() => setShowAddGroupModal(false)}
      />
    </>
  );
}
