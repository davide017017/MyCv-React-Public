import { cvData } from '../../data/cvData';
import profilePhoto from '../../assets/img/photodavidemartinico.jpg';

const Photo = () => (
  <div
    className="flex justify-center py-3 print:py-2"
    role="img"
    aria-label={`Foto profilo di ${cvData.personalInfo.name}`}
  >
    <img
      src={profilePhoto}
      alt={`Foto profilo di ${cvData.personalInfo.name}`}
      className="w-[300px] h-[300px] rounded-full object-cover border-[3px] 
        border-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)] 
        transition-transform duration-300 ease-in-out hover:scale-110
        print:w-[180px] print:h-[180px] print:shadow-[0_0_3px_var(--color-primary)]"
      style={{ aspectRatio: '1 / 1' }}
    />
  </div>
);

export default Photo;
