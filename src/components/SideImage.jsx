function SideImage({ src, alt = "", className = "", wrapperClassName = "" }) {
  return (
    <div className={wrapperClassName}>
      <img src={src} alt={alt} className={`w-full h-auto rounded-lg object-cover ${className}`} />
    </div>
  );
}

export default SideImage;
