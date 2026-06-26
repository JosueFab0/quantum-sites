import AtomJourney from "../components/AtomJourney";
import TabLayout from "../components/TabLayout";

export default function Home() {
  return (
    <div className="relative bg-[#ebe8de] text-[#2b2b2b]">
      <AtomJourney />
      <div className="relative z-10">
        <TabLayout />
      </div>
    </div>
  );
}
