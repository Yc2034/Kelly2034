import React, { useState } from 'react';

export function ImageZoom(props) {
    const [isZoomed, setIsZoomed] = useState(false);
  
    const handleClick = () => {
      setIsZoomed(false);
      // 打开一个新页面或浏览器标签来显示放大的图片
      window.open(props.imageSrc, '_blank');
    };
  
    return (
      <div>
        <img
          src={props.imageSrc}
          alt={props.altText}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
        {isZoomed && (
          <div>
            {/* 放大的图片或其他内容 */}
            <img src={props.imageSrc} alt={props.altText} />
          </div>
        )}
      </div>
    );
  }
