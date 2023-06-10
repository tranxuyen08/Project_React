import React from 'react'
import './ModelComfirm.css'
const ModelComfirmDelete = ({ onConfirm, onCancel }) => {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };
  return (
    <div className="confirmation-modal">
      <div className="confirmation-modal-content">
        <p>Bạn chắc chắn muốn xoá?</p>
        <div className="confirmation-modal-actions">
          <button className="btn-style btn-yes" onClick={handleConfirm}>Đồng Ý</button>
          <button className="btn-style btn-no" onClick={handleCancel}>Huỷ Bỏ</button>
        </div>
      </div>
    </div>
  )
}

export default ModelComfirmDelete