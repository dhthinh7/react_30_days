import { ReactElement, useState } from 'react';

export default function useMultiStepForm(steps: ReactElement[]) {
  let [currentIndex, setCurrentIndex] = useState<number>(0)

  const next = () => {
    setCurrentIndex(prev => {
      if (prev >= steps.length - 1) return prev
      return prev + 1
    })
  }

  const back = () => {
    setCurrentIndex(prev => {
      if (prev <= 0) return prev
      return prev - 1
    })
  }

  const goto = (index: number) => {
    setCurrentIndex(index)
  }

  return {
    currentIndex,
    step: steps[currentIndex],
    steps,
    isFirstIndex: currentIndex === 0,
    isLastIndex: currentIndex === steps.length - 1,
    next,
    back,
    goto
  }
}
