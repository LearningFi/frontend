import React, { useState } from 'react';
import TopProposalCard from '@/components/atom/cards/top-proposal-card';
import proposals from '@/data/myproposal';

interface MyProposalProps {
    statusFilter: string;
}

const MyProposal: React.FC<MyProposalProps> = ({ statusFilter }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Filter proposals by status
    const filteredProposals = statusFilter === 'all'
        ? proposals
        : proposals.filter(proposal => proposal.status.toLowerCase() === statusFilter.toLowerCase());

    // Pagination logic
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProposals = filteredProposals.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredProposals.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className='space-y-32'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentProposals.map((proposal, index) => (
                    <TopProposalCard
                        key={index}
                        title={proposal.title}
                        subTitle={proposal.subTitle}
                        status={proposal.status as 'Pending' | 'Approved' | 'Denied'}
                        dateSubmitted={proposal.dateSubmitted}
                        requestedAmount={proposal.requestedAmount}
                        allocatedAmount={proposal.allocatedAmount}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4 gap-x-3">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-primary-2 text-white' : 'border-primary-2 text-black'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MyProposal;
