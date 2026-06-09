import { Button } from "@mui/material";

export default function Pagination({ page, setPage }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Button
        variant="contained"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </Button>
      <span style={{ margin: "0 10px" }}>Page {page}</span>
      <Button
        variant="contained"
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
    </div>
  );
}
