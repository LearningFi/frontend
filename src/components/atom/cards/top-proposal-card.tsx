import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';

interface ProposalCardProps {
    title: string;
    subTitle?: string;
    status: 'Pending' | 'Approved' | 'Denied';
    dateSubmitted: string;
    requestedAmount: string;
    allocatedAmount: string | 'N/A';
}

const statusStyles = {
    Pending: 'text-yellow-500',
    Approved: 'text-green-500',
    Denied: 'text-red-500',
};

const statusIcons = {
    Pending: <FaExclamationCircle />,
    Approved: <FaCheckCircle />,
    Denied: <FaTimesCircle />,
};

const TopProposalCard: React.FC<ProposalCardProps> = ({ title, subTitle, status, dateSubmitted, requestedAmount, allocatedAmount }) => {
    return (
        <div className="border rounded-lg shadow-md space-y-3">
            <div className="space-y-2 text-center pt-4">
                <h3 className="font-bold text-lg mb-2 px-4">{title}</h3>
                {subTitle && <p className="px-4 pb-2 border-b text-sm font-medium">{subTitle}</p>}
            </div>

            <div className="space-y-3 px-4">
                <p className="mb-1 flex items-center justify-between">
                    <strong>Status:</strong> <span className={`${statusStyles[status]} flex items-center gap-x-4`}>{status} {statusIcons[status]}</span>
                </p>
                <p className="mb-1 flex items-center justify-between text-left"><strong>Date Submitted:</strong> {dateSubmitted}</p>
                <p className="mb-1 flex items-center justify-between text-left"><strong>Requested Amount:</strong> {requestedAmount}</p>
                <p className="mb-3 flex items-center justify-between text-left"><strong>Allocated Amount:</strong> {allocatedAmount}</p>
            </div>

            <div className="flex justify-center py-4">
                <button className="bg-primary-3 text-white py-2 px-4 rounded text-sm flex self-center justify-center">View Details</button>
            </div>
        </div>
    );
};

export default TopProposalCard;
