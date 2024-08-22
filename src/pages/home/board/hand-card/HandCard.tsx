import cn from 'clsx';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { useState } from 'react';

import { getStyleRotation } from '@/pages/home/board/hand-card/get-style-rotation.ts';
import type { ICard } from '@/types/card.types.ts';

interface Props {
  card: ICard;
  onClick: () => void;
  isDisabled?: boolean;
  isHided?: boolean;
  style?: CSSProperties;
  index: number;
  arrayLength: number;
}

export function HandCard({
  card,
  onClick,
  isDisabled,
  isHided,
  style,
  index,
  arrayLength
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const { rotate, translateY } = getStyleRotation(index, arrayLength, !isHided);

  const initialAnimation = {
    scale: 1,
    zIndex: 0,
    y: translateY,
    rotate
  };

  return (
    <motion.button
      className={cn(
        'h-[8.5rem] w-24 inline-block -ml-7 rounded-lg cursor-pointer will-change-transform',
        {
          shadow: !isHided,
          'opacity-50': isDisabled
        }
      )}
      style={style}
      disabled={isDisabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 1, zIndex: 0, y: 0 }}
      animate={
        isHovered && !isHided
          ? {
              scale: 1.3,
              zIndex: 10,
              y: -95
            }
          : initialAnimation
      }
      trasition={{ type: 'spring', stiffness: 210, damping: 30 }}
    >
      <img
        src={isHided ? '/assets/cards/cover.png' : card.imageUrl}
        alt={card.name}
        draggable="false"
        className="will-change-transform"
      />
    </motion.button>
  );
}
