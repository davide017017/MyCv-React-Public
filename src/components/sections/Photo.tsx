import { cvData } from '../../data/cvData';
import profilePhoto from '../../assets/img/photodavidemartinico.jpg';

const Photo = () => (
  <div className="flex justify-center py-3">
    <img
      src={profilePhoto}
      alt={`Foto profilo di ${cvData.personalInfo.name}`}
      className="w-[300px] h-[300px] rounded-full object-cover border-[3px] 
        border-[var(--color-border)] shadow-[0_0_10px_var(--color-border)] 
        transition-transform duration-300 ease-in-out hover:scale-110
        print:w-[180px] print:h-[180px]"
      style={{ aspectRatio: '1 / 1' }}
    />
  </div>
);

export default Photo;
