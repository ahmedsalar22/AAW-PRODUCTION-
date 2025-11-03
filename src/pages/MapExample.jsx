
import Contraband from "../components/Description/Contraband";
import MainSlider from "../components/Description/MainSlider";
import Description from "../components/Description/description";
import Icon from "../components/Description/Icon";
import ReviwesTipsMain from "../components/Description/ReviwesTipsMain";
import ReviewForm from "../components/Description/ReviewForm";


const MapExample = () => {
  return (
    <div className="p-8 container max-w-[80vw] m-auto">
      <Contraband />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mt-3">
        <div className="lg:col-span-9">
          <Description />
          <Icon />
          <ReviwesTipsMain />
          <ReviewForm />
         
        </div>
        <div className="lg:col-span-3"> 
          <MainSlider />
        </div>
      </div>
    </div>
  );
};

export default MapExample;
