import Profile from "./Profile";

export default function ForwordingProps() {
  return (
    <div>
      <h1>Forwording Props</h1>
      <hr />
      <Profile
        size={200}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
    </div>
  );
}
