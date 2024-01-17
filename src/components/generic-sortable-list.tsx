import { shiftArray } from '@/utils/functions';
import { ReactElement, cloneElement } from 'react';
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';

interface RenderListItemParams<T> extends Pick<DraggableProvided, 'dragHandleProps'> {
  index: number;
  item: T;
}

interface GenericSortableListProps<T> {
  dataSource: Array<T>;
  droppableId?: string;
  getItemKey: (item: T, index: number) => string;
  listClassName?: string;
  onDataSourceUpdate: (updatedDataSource: Array<T>) => void;
  renderListItem: (params: RenderListItemParams<T>) => ReactElement;
}

export const GenericSortableList = <T,>({
  dataSource,
  droppableId = 'droppable',
  getItemKey,
  listClassName,
  onDataSourceUpdate,
  renderListItem,
}: GenericSortableListProps<T>) => {
  const handleDragEnd = ({ destination, reason, source }: DropResult) => {
    if (reason === 'CANCEL' || !destination || source.index === destination.index) {
      return;
    }

    onDataSourceUpdate(shiftArray(dataSource, source.index, destination.index));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div ref={provided.innerRef} className={listClassName} {...provided.droppableProps}>
            {dataSource.map((item, index) => {
              const itemKey = getItemKey(item, index);

              return (
                <Draggable key={itemKey} draggableId={itemKey} index={index}>
                  {(provided) => {
                    const listItemComponent = renderListItem({
                      item,
                      index,
                      dragHandleProps: provided.dragHandleProps,
                    });

                    return cloneElement(listItemComponent, {
                      ref: provided.innerRef,
                      ...provided.draggableProps,
                    });
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
